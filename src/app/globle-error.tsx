import ErrorPage from "@/components/error/error-page";

export default function GlobalError() {
  return <ErrorPage status={500} message="We’re sorry, something went wrong on our end." btn="Go Home" />;
}
