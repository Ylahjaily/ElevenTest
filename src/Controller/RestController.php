<?php

namespace App\Controller;

use App\Entity\Post;
use App\Entity\User;
use App\Repository\PostRepository;
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
use Symfony\Component\Serializer\SerializerInterface;

class RestController extends AbstractFOSRestController
{

    private $userRepository;
    private $em;

    public function __construct(UserRepository $userRepository,PostRepository $postRepository, EntityManagerInterface $em)
    {
        $this->userRepository = $userRepository;
        $this->postRepository = $postRepository;
        $this->em = $em;
    }

    static private $postUserRequiredAttributes = [
        'name' => 'setName',
        'email' => 'setEmail',
        'password' => 'setPassword'
    ];

    static private $postMessageRequiredAttributes = [
        'wording' => 'setWording',
    ];


    /**
     * @Rest\Post("/register")
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
        return $this->view($user);
    }

    /**
     * @Rest\Post("/api/post/new")
     * @ParamConverter("post", converter="fos_rest.request_body")
     */
    public function postApiMessage(Request $request, Post $post)
    {

        foreach(static::$postMessageRequiredAttributes as $attribute => $setter) {
            if(is_null($request->get($attribute))) {
                continue;
            }
            $post->$setter($request->get($attribute));
        }
        $this->em->persist($post);
        $this->em->flush();
        return $this->view($post);
    }

    /**
 * @Rest\Get("/api/users")
 * @Rest\View(serializerGroups={"users"})
 */
    public function getApiUsers()
    {
        $users = $this->userRepository->findAll();
        return $this->view($users);
    }

    /**
     * @Rest\Get("/api/posts")
     * @Rest\View(serializerGroups={"posts"})
     */
    public function getApiPosts()
    {
        $users = $this->postRepository->findAll();
        return $this->view($users);
    }

}
