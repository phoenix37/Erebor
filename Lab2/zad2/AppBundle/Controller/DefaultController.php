<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use AppBundle\Entity\Product;

class DefaultController extends Controller
{

    /**
     * @Route("/product_demo_add", name="product_demo_add")
     */

    public function addAction(Request $request)
    {
        $product = new Product();
        $product->setName('A Foo Bar');
        $product->setPrice('19.99');
        $product->setDescription('Lorem ipsum dolor');
        $form = $this->createFormBuilder($product)
            ->add('name', 'text')
            ->add('price', 'money')
            ->add('description', 'textarea')
            ->add('save', 'submit', array('label' => 'Create product'))
            ->getForm();
        $form->handleRequest($request);
        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($product);
            $em->flush();
            return $this->redirectToRoute('product_demo_homepage');
        }
        return $this->render('AppBundle:Default:product_form.html.twig', array(
            'form' => $form->createView(),
        ));
    }

    /**
     * @Route("/productdemo/", name="product_demo_homepage")
     */

    public function indexAction()
    {
        $products = $this->getDoctrine()
            ->getRepository('AppBundle:Product')
            ->findAllOrderedByName();
        return $this->render('AppBundle:Default:index.html.twig',
            array('products' => $products));
    }

    /**
     * @Route("/product_demo_edit/{id}", name="product_demo_edit")
     */
    public function editAction(Request $request, $id)
    {
        $em = $this->getDoctrine()->getManager();
        $product = $em->getRepository('AppBundle:Product')->find($id);
        if (!$product) {
            throw $this->createNoFoundException(
                'No product found for id ' . $id
            );
        }
        $form = $this->createFormBuilder($product)
            ->add('name', 'text')
            ->add('price', 'money')
            ->add('description', 'textarea')
            ->add('save', 'submit', array('label' => 'Change product'))
            ->getForm();
        $form->handleRequest($request);
        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($product);
            $em->flush();
            return $this->redirectToRoute('product_demo_homepage');
        }
        return $this->
        render('AppBundle:Default:product_form.html.twig', array(
            'form' => $form->createView(),
        ));
    }

    /**
     * @Route("/product_demo_delete/{id}", name="product_demo_delete")
     */

    public function deleteAction($id)
    {
        $em = $this->getDoctrine()->getManager();
        $product = $em->getRepository('AppBundle:Product')->find($id);
        if ($product) {
            $em->remove($product);
            $em->flush();
        } else {
            throw $this->createNoFoundException(
                'No product found for id '.$id
            );
        }
        return $this->redirectToRoute('product_demo_homepage');
    }

}
