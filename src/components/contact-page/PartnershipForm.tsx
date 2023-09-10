import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";

const formSchema = z.object({
  fullname: z
    .string({
      required_error: "Please enter your full name.",
    })
    .refine(
      (name) => {
        const words = name.trim().split(" ");
        return words.length >= 2;
      },
      {
        message: "Full name must be at least 2 words.",
      }
    ),
  email: z
    .string({
      required_error: "Please enter your email address.",
    })
    .email(),
  whatareyou: z.string({
    required_error: "Please select which are you!.",
  }),
});

export default function PartnershipForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    // @ts-expect-error zodResolver is not typed correctly
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      whatareyou: "",
    },
  });
  return (
    <div>
      <FormField
        control={form.control}
        name="whatareyou"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="block text-sm font-semibold leading-6 text-gray-900">
              Favorite Color
            </FormLabel>
            <FormControl>
              <Input
                placeholder="Favorite Color"
                className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
