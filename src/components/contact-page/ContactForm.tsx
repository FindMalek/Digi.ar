"use client";

import { useEffect, useState } from "react";

import { Check, ChevronsUpDown } from "lucide-react";

import { Switch } from "@headlessui/react";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/Command";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/Textarea";

import JobApplicantForm from "@/components/contact-page/JobApplicantForm";
import PartnershipForm from "@/components/contact-page/PartnershipForm";

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
  whatareyou: z
    .string({
      required_error: "Please select which are you!.",
    })
    .nonempty({
      message: "Please select which are you!.",
    }),
  companyname: z
    .string({
      required_error: "Please enter your company name.",
    })
    .nonempty({
      message: "Please enter your company name.",
    }),
  neededservices: z
    .array(
      z.string({
        required_error: "Please select at least one service.",
      })
    )
    .refine((services) => services.length > 0, {
      message: "Please select at least one service.",
    }),
  message: z
    .string({
      required_error: "Please tell us how can we help you.",
    })
    .nonempty({
      message: "Please tell us how can we help you.",
    }),
});

const whatareyou = [
  { label: "I'm a Company", value: "company" },
  { label: "I'm a Job Applicant", value: "jobapplicant" },
  { label: "I'm a Partnership", value: "partnership" },
] as const;

const services = [
  { label: "Marketing Consulting", value: "marketing-consulting" },
  { label: "Social Media Management", value: "social-media-management" },
  {
    label: "Marketing Project Management",
    value: "marketing-project-management",
  },
  { label: "Performance Advertising", value: "performance-advertising" },
  { label: "Branding Your Company", value: "branding-your-company" },
  { label: "Website Creation & Design", value: "website-creation-and-design" },
] as const;

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false);

  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const [companyFieldVisible, setCompanyFieldVisible] = useState(false);
  const [jobApplicantVisible, setJobApplicantVisible] = useState(false);
  const [partnershipVisible, setPartnerShipVisible] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    // @ts-expect-error zodResolver is not typed correctly
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      whatareyou: "",
      companyname: "",
      neededservices: [],
      message: "",
    },
  });

  const handleWhatareyouChange = (value: string) => {
    if (value === "company") {
      setCompanyFieldVisible(true);
      setJobApplicantVisible(false);
      setPartnerShipVisible(false);
    } else if (value === "jobapplicant") {
      setCompanyFieldVisible(false);
      setJobApplicantVisible(true);
      setPartnerShipVisible(false);
    } else if (value === "partnership") {
      setCompanyFieldVisible(false);
      setJobApplicantVisible(false);
      setPartnerShipVisible(true);
    } else {
      setCompanyFieldVisible(false);
      setJobApplicantVisible(false);
      setPartnerShipVisible(false);
    }

    form.setValue("whatareyou", value);
  };

  const handleServiceSelection = (serviceValue: string) => {
    if (selectedServices.includes(serviceValue)) {
      setSelectedServices((prevSelected) =>
        prevSelected.filter((item) => item !== serviceValue)
      );
    } else {
      setSelectedServices((prevSelected) => [...prevSelected, serviceValue]);
    }
  };

  useEffect(() => {
    form.setValue("neededservices", selectedServices);
  }, [selectedServices]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff006a] to-[#d739ff] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Nos contactez
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Nos sommes à votre disposition pour répondre à vos questions.
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-sm font-semibold leading-6 text-gray-900">
                      Full name
                    </FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="fullname"
                        placeholder="Name and Lastname"
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-sm font-semibold leading-6 text-gray-900">
                      E-mail
                    </FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="email"
                        placeholder="hello@example.com"
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="sm:col-span-2">
              <FormField
                control={form.control}
                name="whatareyou"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-sm font-semibold leading-6 text-gray-900">
                      I am
                    </FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl className="w-full flex items-center">
                            <Button
                              variant="outline"
                              role="combobox"
                              className={cn(
                                "flex-grow text-left",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? whatareyou.find(
                                    (iam) => iam.value === field.value
                                  )?.label
                                : "Select I am"}
                              <span className="flex-grow" />
                              <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent asChild>
                          <Command className="xs:min-w-[360px] sm:min-w-[580px] text-left p-0">
                            <CommandGroup>
                              {whatareyou.map((iam) => (
                                <CommandItem
                                  value={iam.label}
                                  key={iam.value}
                                  onSelect={() => {
                                    handleWhatareyouChange(iam.value);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      iam.value === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {iam.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="sm:col-span-2">
              {companyFieldVisible && (
                <div>
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <FormField
                        control={form.control}
                        name="companyname"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="block text-sm font-semibold leading-6 text-gray-900">
                              Company Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                autoComplete="companyname"
                                placeholder="Company Name"
                                className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div>
                      <FormField
                        control={form.control}
                        name="neededservices"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="block text-sm font-semibold leading-6 text-gray-900">
                              Services Needed
                            </FormLabel>
                            <FormControl>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl className="w-full flex items-center">
                                    <Button
                                      variant="outline"
                                      role="combobox"
                                      className={cn(
                                        "flex-grow text-left",
                                        !field.value.length &&
                                          "text-muted-foreground"
                                      )}
                                    >
                                      {field.value.length
                                        ? `${field.value.length} ${
                                            field.value.length === 1
                                              ? "is service"
                                              : "are services"
                                          } selected`
                                        : "Choose service(s)"}
                                      <span className="flex-grow" />
                                      <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent asChild>
                                  <Command className="text-left p-0">
                                    <CommandGroup>
                                      {services.map((service) => (
                                        <CommandItem
                                          value={service.label}
                                          key={service.value}
                                          onSelect={() => {
                                            handleServiceSelection(
                                              service.value
                                            );
                                          }}
                                        >
                                          <Check
                                            className={cn(
                                              "mr-2 h-4 w-4",
                                              selectedServices.includes(
                                                service.value
                                              )
                                                ? "opacity-100"
                                                : "opacity-0"
                                            )}
                                          />
                                          {service.label}
                                        </CommandItem>
                                      ))}
                                    </CommandGroup>
                                  </Command>
                                </PopoverContent>
                              </Popover>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block text-sm font-semibold pt-6 leading-6 text-gray-900">
                            How Can We Help?
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              autoComplete="howcanwehelp"
                              placeholder="How Can We Help?"
                              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}
              {jobApplicantVisible && <JobApplicantForm />}
              {partnershipVisible && <PartnershipForm />}
            </div>
            {/*              
                <div className="sm:col-span-2">
                <label
                    htmlFor="company"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                >
                    Company
                </label>
                <div className="mt-2.5">
                    <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>
                <div className="sm:col-span-2">
                <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                >
                    Email
                </label>
                <div className="mt-2.5">
                    <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>
                <div className="sm:col-span-2">
                <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                >
                    Phone number
                </label>
                <div className="relative mt-2.5">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">
                        Country
                    </label>
                    <select
                        id="country"
                        name="country"
                        className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm"
                    >
                        <option>US</option>
                        <option>CA</option>
                        <option>EU</option>
                    </select>
                    <ChevronDownIcon
                        className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                        aria-hidden="true"
                    />
                    </div>
                    <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>
                <div className="sm:col-span-2">
                <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                >
                    Message
                </label>
                <div className="mt-2.5">
                    <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                    />
                </div>
                </div>
            */}
            <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={cn(
                    agreed ? "bg-pink-600" : "bg-gray-200",
                    "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                  )}
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      agreed ? "translate-x-3.5" : "translate-x-0",
                      "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                    )}
                  />
                </Switch>
              </div>
              <Switch.Label className="text-sm leading-6 text-gray-600">
                By selecting this, you agree to our{" "}
                <a href="#" className="font-semibold text-pink-600">
                  privacy&nbsp;policy
                </a>
                .
              </Switch.Label>
            </Switch.Group>
          </div>
          <div className="mt-10">
            <Button
              type="submit"
              className="block w-full rounded-md bg-pink-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
            >
              Let's talk
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
