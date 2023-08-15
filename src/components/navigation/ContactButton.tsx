import { LinkIcon } from "@heroicons/react/20/solid";
import { Button } from "@/components/ui/Button";

type Props = {
  className?: string;
};

export default function ContactButton({ className }: Props) {
  return (
<div className={className}>
  <div className="flex items-center justify-center md:justify-start">
    <div className="flex-shrink-0 ml-auto md:w-full">
      <Button
        type="button"
        className="w-full md:w-auto relative inline-flex items-center gap-x-1.5 rounded-3xl bg-pink-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
      >
        <LinkIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
        Contact
      </Button>
    </div>
  </div>
</div>

  );
}
