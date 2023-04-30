'use client';

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { 
  FieldValues, 
  SubmitHandler,
  useForm
} from "react-hook-form";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useNewsModal from "@/app/hooks/useNewsModal";

import Modal from "./Modal";
import Input from "../Inputs/Input";
import Heading from "../Heading";
import Button from "../Button";

const NewsModal= () => {
  const registerModal = useRegisterModal();
  const newsModal = useNewsModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios.post('/api/register', data)
    .then(() => {
      toast.success('נרשמת בהצלחה!');
      newsModal.onClose();
      loginModal.onOpen();
    })
    .catch((error) => {
      toast.error(error);
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  const onToggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [registerModal, loginModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        center
        title="הירשם לניוזלטר"
        subtitle="בהרשמה לניוזלטר תקבלו עדכונים למייל"
      />
      <Input
        id="email"
        label="מייל"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )



  return (
    <Modal
      disabled={isLoading}
      isOpen={newsModal.isOpen}
      title="הרשמה לניוזלטר"
      actionLabel="הירשם"
      onClose={newsModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
}

export default NewsModal;