import Layout from '../components/Layout/Layout';
import styles from '../styles/projects.module.scss';
import {
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  Button,
} from '@material-ui/core';

const Projects = () => (
  <div className={styles.projects}>
    <Layout />
    <header className={styles.header}>
      <h1>Projects</h1>
    </header>
    <div className={styles.body}>
      <section className={styles.sectionOne}>
        <Card className={styles.card}>
          <h2>E-COMMERCE</h2>
          <CardContent>
            <ul>
              <li>MongoDB</li>
              <li>Express</li>
              <li>React</li>
              <li>Node</li>
            </ul>
          </CardContent>
          <CardActionArea>
            <Button>
              <a href="https://github.com/philip993/e-com">GitHub</a>
            </Button>
          </CardActionArea>
        </Card>
      </section>

      <section className={styles.sectionTwo}>
        <Card className={styles.card}>
          <h2>EMPLOYEE RECORDS</h2>
          <CardContent>
            <ul>
              <li>MySQL</li>
              <li>Express</li>
              <li>React</li>
              <li>Node</li>
            </ul>
          </CardContent>
          <CardActionArea>
            <Button>
              <a href="https://github.com/philip993/employee-rec">GitHub</a>
            </Button>
          </CardActionArea>
        </Card>
      </section>
    </div>
  </div>
);

export default Projects;
