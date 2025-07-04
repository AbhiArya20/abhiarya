import SocialComponent from "@/components/socials";

const Contact = () => {
  return (
    <footer className="mt-12 px-4">
      <h2 className="font-semibold">Get in touch</h2>
      <p className="text-muted-foreground leading-6">
        Feel free to reach out if you want to collaborate on a project, have a question, or just want to connect.
      </p>
      <SocialComponent />
      {/* <div className="page-col mt-10">
        <div className="flex flex-col gap-4">
          <svg height="24px" width="24px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <g fill="#737373">
              <path
                d="M8.529 15.222C8.826 15.377 9.173 15.377 9.47 15.222C11.04 14.403 15.999 11.435 15.999 6.609C16.007 4.489 14.295 2.763 12.173 2.75C10.896 2.766 9.709 3.41 9 4.47C8.29 3.41 7.103 2.766 5.827 2.75C3.704 2.763 1.993 4.489 2.001 6.609C2.001 11.435 6.959 14.403 8.529 15.222Z"
                fill="#737373"
                fill-opacity="0.3"
                stroke="none"
              ></path>
              <path
                d="M8.529 15.222C8.826 15.377 9.173 15.377 9.47 15.222C11.04 14.403 15.999 11.435 15.999 6.609C16.007 4.489 14.295 2.763 12.173 2.75C10.896 2.766 9.709 3.41 9 4.47C8.29 3.41 7.103 2.766 5.827 2.75C3.704 2.763 1.993 4.489 2.001 6.609C2.001 11.435 6.959 14.403 8.529 15.222Z"
                fill="none"
                stroke="#737373"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0.5"
              ></path>
            </g>
          </svg>
          <div className="flex flex-col gap-2 text-xs">
            <span>
              Designed &amp; Made with <span className="bg-muted-foreground bg-clip-text text-transparent">❤️</span>
            </span>
            <span className="text-muted-foreground">© 2025 LegionWebDev. All rights reserved.</span>
            <span className="text-muted-foreground">
              Missing something?{" "}
              <a
                className="text-white/70 hover:text-blue-500 hover:underline"
                target="_blank"
                href="https://v1.legions.dev"
              >
                Old Portfolio?
              </a>
            </span>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Contact;
