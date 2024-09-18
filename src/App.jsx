import { Container, Button, Text, Title, TextInput, Flex } from "@mantine/core";
import "@mantine/core/styles.layer.css";
import { useForm } from "react-hook-form";
import GenerateText from "./TextGenerator";
import emailjs from "emailjs-com";
import { useState } from "react";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState();
  const [success, setSuccess] = useState();
  const onSubmit = async (data) => {
    setLoading(true);
    document.getElementById("submit-btn").innerText = "Se trimite...";

    const emailEntry = `document.getElementById("AdresaEmail").value = "${data.email}";`;
    const confirmEmailEntry = `document.getElementById("ConfirmareAdresaEmail").value = "${data.cemail}";`;
    const numeEntry = `document.getElementById("Nume").value = "${data.nume}";`;
    const prenumeEntry = `document.getElementById("Prenume").value = "${data.prenume}";`;
    const serieCIEntry = `document.getElementById("SerieCI").value = "${data.serie_ci}";`;
    const numarCIEntry = `document.getElementById("NumarCI").value = "${data.numar_ci}";`;
    const ciValabilDeLaEntry = `document.getElementById("CiValabilDeLa").value = "${data.CiValabilDeLa}";`;
    const ciValabilPanaLaEntry = `document.getElementById("CiValabilPanaLa").value = "${data.CiValabilPanaLa}";`;
    const cnpEntry = `document.getElementById("CNP").value = "${data.CNP}";`;
    const adresaEntry = `document.getElementById("Adresa").value = "${data.Adresa}";`;
    const judetEntry = `document.getElementById("Judet").value = "${data.Judet}";`;
    const telefonEntry = `document.getElementById("Telefon").value = "${data.Telefon}";`;

    const result = GenerateText({
      emailEntry,
      confirmEmailEntry,
      numeEntry,
      prenumeEntry,
      serieCIEntry,
      numarCIEntry,
      ciValabilDeLaEntry,
      ciValabilPanaLaEntry,
      cnpEntry,
      adresaEntry,
      judetEntry,
      telefonEntry,
    });

    document.getElementById("text-area").value = result;

    const form = document.getElementById("submit-form");
    console.log(form);

    try {
      await emailjs.sendForm(
        "service_szjr20n",
        "template_0n3yr7m",
        form,
        "39ffofJSeQvftSxPJ"
      );
      document.getElementById("submit-btn").innerText = "Mesaj trimis !";
      setSuccess(true);
    } catch {
      document.getElementById("submit-btn").innerHTML =
        "A aparut o eroare. Retrimite ?";
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container bg={"dark"}>
        <Title ta="center" mt={100}>
          Generator date de intrare
          <Text
            ms={10}
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: "blue", to: "yellow" }}
          >
            JTS Solar
          </Text>
        </Title>
        <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
          Va rugam sa completati toate campurile de mai jos si sa apasati pe
          butonul de Descarca la final.
        </Text>
        <Text c="dimmed" ta="center" size="md" maw={580} mx="auto" mt="xl">
          Datele completate trebuie sa coincida cu cele din documentele
          corespondente beneficarului proiectului
        </Text>
        <form id="submit-form" onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            {...register("email")}
            description="Adresa personala de email"
            label="Email"
            placeholder="exemplu@gmail.com"
          />
          <TextInput
            {...register("cemail")}
            description="Adresa personala de email"
            label="Confirma Email"
            placeholder="exemplu@gmail.com"
          />
          <TextInput
            name="first-name"
            {...register("nume")}
            label="Nume"
            description="Numele (TREBUIE SA CORESPUNDA NUMELUI DIN DOSAR)"
            placeholder="Andrei"
          />
          <TextInput
            name="last-name"
            {...register("prenume")}
            label="Prenume"
            description="Prenumele (TREBUIE SA CORESPUNDA NUMELUI DIN DOSAR)"
            placeholder="Popescu"
          />
          <TextInput
            {...register("serie_ci")}
            label="Serie CI"
            description="Seria cartii de identitate"
            placeholder="AZ"
          />
          <TextInput
            {...register("numar_ci")}
            label="Numar CI"
            description="Numarul cartii de identitate"
            placeholder="123456"
          />
          <TextInput
            {...register("CiValabilDeLa", {
              required: "Acest câmp este obligatoriu",
              pattern: {
                value: /^[0-9]{8}$/,
                message: "Data trebuie sa contina DOAR 8 cifre (ZZLLAAAA)",
              },
            })}
            label="Valabilitate carte de identitate (Inceput)"
            description="Data de la care este valabila cartea de identitate (ZZLLAAAA)"
            placeholder="03062018"
          />
          <p className="text-red-500">{errors.CiValabilDeLa?.message}</p>
          <TextInput
            {...register("CiValabilPanaLa", {
              required: "Acest câmp este obligatoriu",
              pattern: {
                value: /^[0-9]{8}$/,
                message: "Data trebuie sa contina DOAR 8 cifre (ZZLLAAAA)",
              },
            })}
            label="Valabilitate carte de identitate (Sfarsit)"
            description="Data la care se sfarseste valabilitatea cartii de identitate (ZZ/LL/AAAA)"
            placeholder="03062028"
          />
          <p className="text-red-500">{errors.CiValabilPanaLa?.message}</p>
          <TextInput
            {...register("CNP")}
            description="Codul numeric personal din buletin"
            label="CNP"
            placeholder="5000603051761"
          />
          <TextInput
            {...register("Adresa")}
            label="Adresa"
            description="Adresa din buletin corespondenta proiectului depus"
            placeholder="Sat Borlesti, Com Merisani nr 167"
          />
          <TextInput
            {...register("Judet")}
            label="Judetul din buletin"
            description="Judetul din buletin corespondent proiectului depus"
            placeholder="Arges"
          />
          <TextInput
            {...register("Telefon", {
              required: "Numărul de telefon este obligatoriu",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Numărul de telefon trebuie să conțină exact 10 cifre",
              },
            })}
            description="Numarul de telefon"
            label="Numar de telefon"
            placeholder="0771504694"
          />
          <p className="text-red-500">{errors.Telefon?.message}</p>
          <Flex justify={"center"}>
            <Button
              disabled={success || loading}
              id="submit-btn"
              type="submit"
              variant="filled"
              size={"md"}
              color="green"
              my={"xl"}
            >
              <Text className="underline underline-offset-4 hover:underline-offset-8 transition-all">
                {success && "Mesaj trimis, multumim !"}
                {loading && "Se trimite..."}
                {!success && !loading && "Trimite"}
              </Text>
            </Button>
            <textarea className="hidden" name="message" id="text-area" />
          </Flex>
        </form>
      </Container>
    </>
  );
}

export default App;
