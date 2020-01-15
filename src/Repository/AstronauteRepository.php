<?php

namespace App\Repository;

use App\Entity\Astronaute;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Astronaute|null find($id, $lockMode = null, $lockVersion = null)
 * @method Astronaute|null findOneBy(array $criteria, array $orderBy = null)
 * @method Astronaute[]    findAll()
 * @method Astronaute[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AstronauteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Astronaute::class);
    }
}
