import {
  createStyles,
  Container,
  Accordion,
  ThemeIcon,
  MantineProvider,
  getStylesRef,
} from "@mantine/core";
import { FiPlusCircle } from "react-icons/fi";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top left",
    position: "relative",
    color: "black",
    fontFamily: `"Montserrat", sans-serif`,
  },

  item: {
    backgroundColor: theme.white,
    borderBottom: 0,
    borderRadius: 0,
    boxShadow: theme.shadows.lg,
    overflow: "hidden",
    fontFamily: `Montserrat`,
  },

  control: {
    fontSize: theme.fontSizes.lg,
    padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
    color: theme.black,

    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  content: {
    paddingLeft: theme.spacing.xl,
    lineHeight: 1.6,
    color: theme.black,
  },

  icon: {
    ref: getStylesRef("icon"),
    marginLeft: theme.spacing.md,
  },

  gradient: {
    backgroundImage: `red`,
  },

  itemOpened: {
    [`& .${getStylesRef("icon")}`]: {
      transform: "rotate(45deg)",
    },
  },

  button: {
    display: "block",
    marginTop: theme.spacing.md,

    [theme.fn.smallerThan("sm")]: {
      display: "block",
      width: "100%",
    },
  },
}));

const faqData = [
  {
    title: "What is Lyon Cars Airport Transfers?",
    content:
      "Lyon Cars Airport Transfers is a professional airport transfer service provider based in Lagos and London. We specialize in providing safe and reliable airport transfers to and from local and international airports.",
    value: "about-lcat",
  },
  {
    title: "How do I book my airport shuttle?",
    content:
      "Booking your airport shuttle with Lyon Cars Airport Transfers is quick and easy. You can book online through our website or mobile app, or you can contact us directly to make a reservation.",
    value: "about-booking",
  },
  {
    title: "What type of vehicles do you offer?",
    content:
      "We offer a range of vehicles to suit your specific needs, including sedans, SUVs, and vans. All of our vehicles are well-maintained and equipped with modern amenities to ensure your comfort and convenience",
    value: "about-offer",
  },

  {
    title:
      "How much does it cost to book a ride with Lyon Cars Airport Transfers?",
    content:
      "Our prices vary depending on the distance, time, and type of service you require. However, we always offer competitive rates and special discounts for advanced bookings.",
    value: "about-price",
  },
  {
    title: "Do you offer airport transfers to and from all airports?",
    content:
      "Yes, we offer airport transfers to and from all local and international airports in Lagos and London.",
    value: "about-to-fro-service",
  },
  {
    title: "Is Lyon Cars Airport Transfers available 24/7?",
    content:
      "Yes, we are available 24/7 to provide you with reliable and hassle-free airport transfers.",
    value: "about-time",
  },
];

export default function AccordionFaq() {
  const { classes } = useStyles();

  const faqItems = faqData.map((f) => {
    return (
      <Accordion.Item
        key={f.value}
        className={`${classes.item} `}
        value={f.value}
      >
        <Accordion.Control style={{ fontFamily: `"Montserrat", sans-serif` }}>
          <span className="text-sm"> {f.title}</span>
        </Accordion.Control>
        <Accordion.Panel style={{ fontFamily: `"Montserrat", sans-serif` }}>
          <span className="text-[13px] text-gray-600">{f.content}</span>
        </Accordion.Panel>
      </Accordion.Item>
    );
  });
  return (
    <div className={`${classes.wrapper} leading-5`}>
      <Container size="sm">
        <Accordion
          chevronPosition="right"
          defaultValue="reset-password"
          chevronSize={50}
          variant="separated"
          disableChevronRotation
          chevron={
            <ThemeIcon
              radius="xl"
              size={32}
              className="bg-[var(--theme-color)]"
            >
              <FiPlusCircle size="1.05rem" />
            </ThemeIcon>
          }
        >
          {faqItems}
        </Accordion>
      </Container>
    </div>
  );
}
