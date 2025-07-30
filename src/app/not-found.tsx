import PageErrorComponent from "@/components/error/error";

export default function NotFound() {
  return (
    <PageErrorComponent status={404} message="Hmm, we looked everywhere — but that page isn’t here." btn="Go Home" />
  );
}
