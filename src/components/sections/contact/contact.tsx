import SocialComponent from "@/components/socials";

const Contact = () => {
  return (
    <footer className="mt-12">
      <h2 className="font-semibold">Get in touch</h2>
      <p className="text-muted-foreground leading-6">
        Feel free to reach out if you want to collaborate on a project, have a question, or just want to connect.
      </p>
      <SocialComponent />
    </footer>
  );
};

export default Contact;
