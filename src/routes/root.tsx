import LandingPage from './LandingPage';
import bensnow from './../assets/Ben-Snow.png';

export default function Root() {
  return (
      <LandingPage
      name="Ben"
      description="A passionate software developer."
      imageUrl={bensnow}
      projectsUrl=""
      githubUrl="https://github.com/btsui3"
      linkedInUrl="https://linkedin.com/in/benjamin-tsui-2b878436"
    />
  );
}
