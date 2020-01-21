<?php

namespace App\Controller;

use App\Entity\Astronaute;
use App\Repository\AstronauteRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;
use FOS\RestBundle\Controller\Annotations as Rest;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\ConstraintViolation;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Swagger\Annotations as SWG;


class DefaultController extends AbstractFOSRestController
{

    private $astronauteRepository;
    private $em;

    public function __construct(AstronauteRepository $astronauteRepository, EntityManagerInterface $em)
    {
        $this->astronauteRepository = $astronauteRepository;
        $this->em = $em;
    }

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
    public function postAstronaute(Request $request,Astronaute $astronaute,ValidatorInterface $validator, SerializerInterface $serializer)
    {


        $astronaute->setName($request->get('name'));
        $astronaute->setDescription($request->get('description'));
        $astronaute->setAge($request->get('age'));

        $validationErrors = $validator->validate($astronaute);

        // Data validation

        /** @var ConstraintViolation $constraintViolation */
        foreach($validationErrors as $constraintViolation) {
            $message = $constraintViolation->getMessage();
            $propertyPath = $constraintViolation->getPropertyPath();
            $errors[] = ['property' => $propertyPath, 'message' => $message];
        }

        if(!empty($errors)) {
            return new JsonResponse($errors, 400);
        }

        $this->em->persist($astronaute);
        $this->em->flush();

        $json = $serializer->serialize(
            $astronaute,
            'json', ['groups' => 'astronautes']
        );

        $response = new Response();
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->setContent($json);
        $response->setStatusCode(201);
        return $response;
    }


    /**
     * @Rest\Get("/api/astronautes")
     * @SWG\Response(
     *     response="200",
     *     description="Returns list of astronautes"
     * )
     */
    public function getApiAstronautes(SerializerInterface $serializer)
    {
        $astronautes = $this->astronauteRepository->findAll();

        $json = $serializer->serialize(
            $astronautes,
            'json', ['groups' => 'astronautes']
        );

        $response = new Response();
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->setStatusCode(200);
        $response->setContent($json);
        return $response;
    }


    /**
     * @Rest\Get("/api/astronautes/{id}")
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
    public function getApiAstronautesById(Astronaute $astronaute, SerializerInterface $serializer)
    {
        if(is_null($astronaute)) {
            throw new NotFoundHttpException();
        }

        $json = $serializer->serialize(
            $astronaute,
            'json', ['groups' => 'astronautes']
        );

        $response = new Response();
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->setStatusCode(200);
        $response->setContent($json);
        return $response;
    }

}
