import PageErrorComponent from "@/components/error/error";

export default function GlobalError() {
  return <PageErrorComponent status={500} message="We’re sorry, something went wrong on our end." btn="Go Home" />;
}
