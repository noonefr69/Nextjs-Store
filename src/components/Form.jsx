"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  email: z
    .string()
    .min(2, { message: "It does not look like Email." })
    .max(50, { message: "It does not look like Email." })
    .email({ message: "It does not look like Email." }),
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters long." })
    .max(50, { message: "Username must be at most 50 characters long." }),
  message: z
    .string()
    .min(2, { message: "Message must be at least 2 characters long." })
    .max(500, { message: "Message must be at most 500 characters long." }),
});

export function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      message: "",
    },
  });

  function onSubmit(values) {
    // console.log(values);

    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className={`rounded-none`}
                  placeholder="userName"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className={`rounded-none`}
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Message"
                  className={`rounded-none`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className={`cursor-pointer rounded w-[10rem] bg-[#1B9C85] hover:bg-transparent hover:text-[#1B9C85] border border-[#1B9C85]`}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
