<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use App\Security\TokenAuthenticator;
use Doctrine\ORM\EntityManagerInterface;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class RestController extends AbstractFOSRestController
{

    private $userRepository;
    private $em;

    public function __construct(UserRepository $userRepository, EntityManagerInterface $em)
    {
        $this->userRepository = $userRepository;
        $this->em = $em;
    }

    static private $postUserRequiredAttributes = [
        'name' => 'setName',
        'email' => 'setEmail',
        'password' => 'setPassword'
    ];

    /**
     * @Rest\Post("/users/login")
     * @ParamConverter("user", converter="fos_rest.request_body")
     */
    public function register(Request $request, User $user, UserPasswordEncoderInterface $passwordEncoder,TokenAuthenticator $authenticator)
    {
        foreach(static::$postUserRequiredAttributes as $attribute => $setter) {
            if(is_null($request->get($attribute))) {
                continue;
            }
            $user->$setter($request->get($attribute));
        }
        $user->setApiKey($authenticator->generateApiKey());
        $password = $passwordEncoder->encodePassword($user, $user->getPassword());
        $user->setPassword($password);
        $this->em->persist($user);
        $this->em->flush();
        $response = new Response();
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $this->view($user);
    }
}
