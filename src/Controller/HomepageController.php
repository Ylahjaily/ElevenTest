<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomepageController extends AbstractController
{
    /**
     * @Route("/", name="app_homepage")
     * //This function displays the application's homepage//
     */
    public function index()
    {
        return $this->render('homepage/homepage.html.twig');
    }
}
