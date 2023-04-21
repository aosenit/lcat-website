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
    title: "How can I reset my password?",
    content:
      "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.",
    value: "password",
  },
  {
    title: "How can I account?",
    content:
      "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.",
    value: "account",
  },
  {
    title: "How can I credit?",
    content:
      "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.",
    value: "credit",
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
