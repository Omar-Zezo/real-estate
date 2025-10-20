import icon1 from "@/public/svg/icon-1.svg";
import icon2 from "@/public/svg/icon-2.svg";
import icon3 from "@/public/svg/icon-3.svg";
import icon4 from "@/public/svg/icon-4.svg";
import f1 from "@/public/f-1.png";
import f2 from "@/public/f-2.png";
import f3 from "@/public/f-3.png";
import bed from "@/public/svg/bed.svg";
import pathroom from "@/public/svg/pathroom.svg";
import villa from "@/public/svg/villa.svg";
import profile1 from '@/public/Profile-1.png'
import profile2 from '@/public/Profile-2.png'
import profile3 from '@/public/Profile-3.png'

export const heroCards = [
  { num: "200+", title: "Happy Customers" },
  { num: "10k+", title: "Properties For Clients" },
  { num: "16+", title: "Years of Experience" },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about Us" },
  { label: "Properties", href: "/properties" },
  { label: "Services", href: "/services" },
];

export const heroCardsBottom = [
  { img: icon1, title: "Find Your Dream Home" },
  { img: icon2, title: "Unlock Property Value" },
  { img: icon3, title: "Effortless Property Management" },
  { img: icon4, title: "Smart Investments, Informed Decisions" },
];

export const featured = [
  {
    img: f1,
    title: "Seaside Serenity Villa",
    des: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood",
    link: "",
    options: [
      { icon: bed, title: "4-Bedroom" },
      { icon: pathroom, title: "3-Bathroom" },
      { icon: villa, title: "Villa" },
    ],
    price: "550,000",
  },
  {
    img: f2,
    title: "Metropolitan Haven",
    des: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood",
    link: "",
    options: [
      { icon: bed, title: "4-Bedroom" },
      { icon: pathroom, title: "3-Bathroom" },
      { icon: villa, title: "Villa" },
    ],
    price: "550,000",
  },
  {
    img: f3,
    title: "Rustic Retreat Cottage",
    des: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood",
    link: "",
    options: [
      { icon: bed, title: "4-Bedroom" },
      { icon: pathroom, title: "3-Bathroom" },
      { icon: villa, title: "Villa" },
    ],
    price: "550,000",
  },
  {
    img: f2,
    title: "Metropolitan Haven",
    des: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood",
    link: "",
    options: [
      { icon: bed, title: "4-Bedroom" },
      { icon: pathroom, title: "3-Bathroom" },
      { icon: villa, title: "Villa" },
    ],
    price: "550,000",
  },
  {
    img: f3,
    title: "Rustic Retreat Cottage",
    des: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood",
    link: "",
    options: [
      { icon: bed, title: "4-Bedroom" },
      { icon: pathroom, title: "3-Bathroom" },
      { icon: villa, title: "Villa" },
    ],
    price: "550,000",
  },
];

export const testimonials = [
  {
    title: "Exceptional Service!",
    desc: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    profile: {
      img: profile1,
      name: 'Wade Warren',
      location: 'USA, California'
    }
  },
  {
    title: "Efficient and Reliable",
    desc: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results. ",
    profile: {
      img: profile2,
      name: "Emelie Thomson",
      location: 'USA, Florida'
    }
  },
  {
    title: "Trusted Advisors",
    desc: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    profile: {
      img: profile3,
      name: 'John Mans',
      location: 'USA, Nevada'
    }
  },
  {
    title: "Efficient and Reliable",
    desc: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results. ",
    profile: {
      img: profile2,
      name: "Emelie Thomson",
      location: 'USA, Florida'
    }
  },
];
