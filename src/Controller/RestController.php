<?php

namespace App\Controller;

use App\Entity\Astronaute;
use App\Repository\AstronauteRepository;
use Doctrine\ORM\EntityManagerInterface;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\ConstraintViolation;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Swagger\Annotations as SWG;


class RestController extends AbstractFOSRestController
{

    private $astronauteRepository;
    private $em;

    public function __construct(AstronauteRepository $astronauteRepository, EntityManagerInterface $em)
    {
        $this->astronauteRepository = $astronauteRepository;
        $this->em = $em;
    }


    static private $postAstronauteRequiredAttributes = [
        'name' => 'setName',
        'description' => 'setDescription'
    ];


    /**
     * @Rest\Post("/api/new/astronaute")
     * @ParamConverter("astronaute", converter="fos_rest.request_body")
     * @SWG\Parameter(
     *     name="name",
     *     in="body",
     *     type="string",
     *     description="The name of the astronaute",
     *     required=true,
     *     @SWG\Schema(
     *          type="string",
     *          maxLength=255
     *     )
     * )
     * @SWG\Parameter(
     *     name="age",
     *     in="body",
     *     type="int",
     *     description="The age of the astronaute",
     *     required=true,
     *     @SWG\Schema(
     *         type="int",
     *          maxLength=255
     *     )
     * )
     * @SWG\Parameter(
     *     name="description",
     *     in="body",
     *     type="string",
     *     description="The description of the astronaute",
     *     required=true,
     *     @SWG\Schema(
     *         type="string",
     *          maxLength=255
     *     )
     * )
     * @SWG\Response(
     *     response="201",
     *     description="Astronaute created"
     * )
     * @SWG\Response(
     *     response="400",
     *     description="Malformed request body"
     * )
     */
    public function postAstronaute(Request $request,Astronaute $astronaute,ValidatorInterface $validator)
    {
        foreach(static::$postAstronauteRequiredAttributes as $attribute => $setter) {
            if(is_null($request->get($attribute))) {
                continue;
            }
            $astronaute->$setter($request->get($attribute));
        }
        $age = $request->get('age');
        $ageFormatted =(int) $age;
        $astronaute->setAge($ageFormatted);

        $validationErrors = $validator->validate($astronaute);

        // Data validation

        /** @var ConstraintViolation $constraintViolation */
        foreach($validationErrors as $constraintViolation) {
            $message = $constraintViolation->getMessage();
            $propertyPath = $constraintViolation->getPropertyPath();
            if($propertyPath === 'subscription') $propertyPath = 'subscriptionId';
            $errors[] = ['property' => $propertyPath, 'message' => $message];
        }

        //if validation errors > send errors

        if(!empty($errors)) {
            return new JsonResponse($errors, 400);
        }

        //if no errors persist and record new astronaute to database

        $this->em->persist($astronaute);
        $this->em->flush();
        return $this->view($astronaute, 201);
    }


    /**
     * @Rest\Get("/api/astronautes")
     * @Rest\View(serializerGroups={"astronautes"})
     * @SWG\Response(
     *     response="200",
     *     description="Returns list of astronautes"
     * )
     */
    public function getApiAstronautes()
    {
        $users = $this->astronauteRepository->findAll();
        return $this->view($users,200);
    }


    /**
     * @Rest\Get("/api/astronautes/{id}")
     * @Rest\View(serializerGroups={"astronautes"})
     * @SWG\Parameter(
     *     name="id",
     *     in="path",
     *     type="number",
     *     description="The ID of the user",
     *     required=true
     *)
     * @SWG\Response(
     *     response="200",
     *     description="Returns details of an astronaute"
     *)
     * @SWG\Response(
     *     response="404",
     *     description="User not found"
     * )
     */
    public function getApiAstronautesById(Astronaute $astronaute)
    {
        return $this->view($astronaute);
    }

}
