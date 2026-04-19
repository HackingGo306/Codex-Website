"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import BiotechRoundedIcon from "@mui/icons-material/BiotechRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import MemoryRoundedIcon from "@mui/icons-material/MemoryRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";
import styles from "./page.module.css";

const heroImage =
  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=2200&q=85";

const labImage =
  "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1400&q=85";

const focusAreas = [
  {
    icon: ScienceRoundedIcon,
    title: "Nanomaterials",
    text: "Designing surfaces, thin films, and particle systems where structure does the quiet work.",
    tag: "materials",
  },
  {
    icon: HubRoundedIcon,
    title: "Self-Assembly",
    text: "Studying how molecular patterns become reliable architectures across small scales.",
    tag: "interfaces",
  },
  {
    icon: MemoryRoundedIcon,
    title: "Nanoelectronics",
    text: "Building pathways from device physics to low-noise sensing and practical instrumentation.",
    tag: "devices",
  },
];

const selectedWork = [
  {
    title: "Atomic-layer sensor platform",
    text: "A compact sensing workflow for measuring surface changes with repeatable signal behavior.",
  },
  {
    title: "Programmable nanoparticle assemblies",
    text: "Explorations in how particle spacing, chemistry, and environment shape emergent response.",
  },
  {
    title: "Cleanroom field notes",
    text: "Short writing on process decisions, measurement habits, and making lab work more legible.",
  },
];

export default function Home() {
  return (
    <Box component="main" className={styles.page}>
      <section className={styles.hero} id="top">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroScrim} />

        <Container maxWidth="lg" className={styles.heroInner}>
          <Box component="header" className={styles.nav}>
            <Typography component="a" href="#top" className={styles.logo}>
              Xinzhou
            </Typography>
            <Box component="nav" className={styles.navLinks} aria-label="Main">
              <a href="#research">Research</a>
              <a href="#work">Work</a>
              <a href="#contact">Contact</a>
            </Box>
          </Box>

          <div className={styles.heroCopy}>
            <Chip
              label="Nanotechnology research"
              className={styles.heroChip}
              icon={<BiotechRoundedIcon />}
            />
            <Typography component="h1" className={styles.heroTitle}>
              Small-scale science for quieter, smarter systems.
            </Typography>
            <Typography component="p" className={styles.heroText}>
              I study how matter behaves at the nanoscale and turn those
              insights into materials, sensors, and tools that feel precise,
              useful, and calm.
            </Typography>
            <Stack direction="row" spacing={1.5} className={styles.heroActions}>
              <Button
                href="#work"
                variant="contained"
                className={styles.primaryButton}
                endIcon={<ArrowForwardRoundedIcon />}
              >
                View Work
              </Button>
              <Button
                href="mailto:hello@xinzhou.dev"
                variant="outlined"
                className={styles.secondaryButton}
              >
                Get in Touch
              </Button>
            </Stack>
          </div>
        </Container>
      </section>

      <Container maxWidth="lg" className={styles.intro}>
        <div className={styles.introText}>
          <Typography component="p" className={styles.kicker}>
            Materials, interfaces, and devices
          </Typography>
          <Typography component="h2" className={styles.sectionTitle}>
            A personal lab notebook for nanotech ideas that are ready to leave
            the bench.
          </Typography>
        </div>

        <div className={styles.metrics} aria-label="Research highlights">
          <div>
            <strong>10 nm</strong>
            <span>scale-aware design</span>
          </div>
          <div>
            <strong>3</strong>
            <span>research themes</span>
          </div>
          <div>
            <strong>1</strong>
            <span>clear story</span>
          </div>
        </div>
      </Container>

      <Container maxWidth="lg" className={styles.section} id="research">
        <div className={styles.sectionHeader}>
          <Typography component="p" className={styles.kicker}>
            Research Focus
          </Typography>
          <Typography component="h2" className={styles.sectionTitle}>
            Simple questions, careful instruments, elegant systems.
          </Typography>
        </div>

        <div className={styles.focusGrid}>
          {focusAreas.map((area) => {
            const Icon = area.icon;

            return (
              <Card key={area.title} elevation={0} className={styles.focusCard}>
                <CardContent className={styles.cardContent}>
                  <span className={styles.iconWrap}>
                    <Icon fontSize="small" />
                  </span>
                  <Typography component="h3" className={styles.cardTitle}>
                    {area.title}
                  </Typography>
                  <Typography component="p" className={styles.cardText}>
                    {area.text}
                  </Typography>
                  <span className={styles.cardTag}>{area.tag}</span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>

      <section className={styles.workBand} id="work">
        <Container maxWidth="lg" className={styles.workInner}>
          <div className={styles.workImage}>
            <Image
              src={labImage}
              alt="A researcher working with laboratory samples and glassware."
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
            />
          </div>

          <div className={styles.workContent}>
            <Typography component="p" className={styles.kicker}>
              Selected Work
            </Typography>
            <Typography component="h2" className={styles.sectionTitle}>
              Current projects, written in plain language.
            </Typography>

            <div className={styles.workList}>
              {selectedWork.map((item, index) => (
                <div className={styles.workItem} key={item.title}>
                  <span>{`0${index + 1}`}</span>
                  <div>
                    <Typography component="h3" className={styles.workTitle}>
                      {item.title}
                    </Typography>
                    <Typography component="p" className={styles.workText}>
                      {item.text}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Container maxWidth="lg" className={styles.section}>
        <div className={styles.aboutGrid}>
          <div>
            <Typography component="p" className={styles.kicker}>
              About
            </Typography>
            <Typography component="h2" className={styles.sectionTitle}>
              I like research that makes invisible structure feel graspable.
            </Typography>
          </div>
          <Typography component="p" className={styles.aboutText}>
            This site is a small home for research summaries, project notes,
            talks, and collaborations across nanoscale materials and devices.
            The tone is intentionally quiet: fewer claims, better signals, and
            enough space for the science to breathe.
          </Typography>
        </div>
      </Container>

      <Divider className={styles.divider} />

      <Container maxWidth="lg" className={styles.contact} id="contact">
        <div>
          <Typography component="p" className={styles.kicker}>
            Contact
          </Typography>
          <Typography component="h2" className={styles.contactTitle}>
            Have a nanotech question, collaboration, or seminar idea?
          </Typography>
        </div>

        <Stack direction="row" spacing={1.5} className={styles.contactActions}>
          <Button
            href="mailto:hello@xinzhou.dev"
            variant="contained"
            className={styles.primaryButton}
            startIcon={<MailOutlineRoundedIcon />}
          >
            hello@xinzhou.dev
          </Button>
          <Button
            href="#top"
            variant="outlined"
            className={styles.lightButton}
            startIcon={<MenuBookRoundedIcon />}
          >
            Back to Top
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
