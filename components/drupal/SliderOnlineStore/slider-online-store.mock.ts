import type { StoreTab } from "./slider-online-store.types";

// ============================================================
// MOCK — Simula la respuesta del servicio Drupal
// TODO: reemplazar con fetch al endpoint de Drupal
//
// Para ocultar un tab desde el "admin", cambiar enabled: false
// ============================================================

export const MOCK_STORE_TABS: StoreTab[] = [
  {
    id: "repuestos",
    label: "Repuestos",
    iconType: "spare-parts",
    enabled: true,
    products: [
      {
        id: "prod-1",
        name: "Litro lubricante PRO Honda 4T 10W-30 Semisintético",
        imageSrc: "/images/image-llanta.png",
        imageAlt: "Litro lubricante PRO Honda 4T 10W-30 Semisintético",
        price: "$41.000",
        buyUrl: "#",
      },
      {
        id: "prod-2",
        name: "LLANTA TRASERA PIRELLI 120/80-18 MT60 TL",
        imageSrc: "/images/image-llanta.png",
        imageAlt: "Llanta Trasera Pirelli 120/80-18 MT60 TL",
        price: "$190.000",
        originalPrice: "$230.000",
        buyUrl: "#",
      },
      {
        id: "prod-3",
        name: "Remal de Cables/Arnés Honda CB190R",
        imageSrc: "/images/image-llanta.png",
        imageAlt: "Remal de Cables/Arnés Honda CB190R",
        price: "$350.000",
        buyUrl: "#",
      },
      {
        id: "prod-4",
        name: "Batería YASUA YTZ4V Honda CB100, CB110, DIO, NAVI...",
        imageSrc: "/images/image-llanta.png",
        imageAlt: "Batería YASUA YTZ4V Honda",
        price: "$210.000",
        buyUrl: "#",
      },
      {
        id: "prod-5",
        name: "Filtro de aceite original Honda",
        imageSrc: "/images/image-llanta.png",
        imageAlt: "Filtro de aceite original Honda",
        price: "$28.000",
        buyUrl: "#",
      },
    ],
  },
  {
    id: "accesorios",
    label: "Accesorios",
    iconType: "accessories",
    enabled: true, // cambiar a false para ocultar este tab
    products: [
      {
        id: "acc-1",
        name: "Casco Honda CBR Racing Edition",
        imageSrc: "/images/image-llanta.png",
        imageAlt: "Casco Honda CBR Racing Edition",
        price: "$320.000",
        originalPrice: "$380.000",
        buyUrl: "#",
      },
      {
        id: "acc-2",
        name: "Guantes Honda Touring Pro",
        imageSrc: "/images/image-llanta.png",
        imageAlt: "Guantes Honda Touring Pro",
        price: "$95.000",
        buyUrl: "#",
      },
      {
        id: "acc-3",
        name: "Chaqueta Honda Urban Rider",
        imageSrc: "/images/image-llanta.png",
        imageAlt: "Chaqueta Honda Urban Rider",
        price: "$450.000",
        buyUrl: "#",
      },
      {
        id: "acc-4",
        name: "Maleta lateral Honda Adventure",
        imageSrc: "/images/image-llanta.png",
        imageAlt: "Maleta lateral Honda Adventure",
        price: "$280.000",
        buyUrl: "#",
      },
      {
        id: "acc-5",
        name: "Rodilleras Honda Off-Road",
        imageSrc: "/images/image-llanta.png",
        imageAlt: "Rodilleras Honda Off-Road",
        price: "$120.000",
        buyUrl: "#",
      },
    ],
  },
];
