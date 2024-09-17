import { Container, Button, Text, Title, TextInput, Flex } from "@mantine/core";
import "@mantine/core/styles.layer.css";
import { useForm } from "react-hook-form";
import GenerateText from "./TextGenerator";

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
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

    console.log(numeEntry);

    const result = GenerateText({
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

    const blob = new Blob([result], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `Date-${data.nume}-${data.prenume}.txt`; // Filename for the download
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            {...register("nume")}
            label="Nume"
            description="Numele (TREBUIE SA CORESPUNDA NUMELUI DIN DOSAR)"
            placeholder="Andrei"
          />
          <TextInput
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
            {...register("CiValabilDeLa")}
            label="Valabilitate carte de identitate (Inceput)"
            description="Data de la care este valabila cartea de identitate (ZZ/LL/AAAA)"
            placeholder="03062018"
          />
          <TextInput
            {...register("CiValabilPanaLa")}
            label="Valabilitate carte de identitate (Sfarsit)"
            description="Data la care se sfarseste valabilitatea cartii de identitate (ZZ/LL/AAAA)"
            placeholder="03062028"
          />
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
            {...register("Telefon")}
            description="Numarul de telefon cu prefixul de romania"
            label="Numar de telefon"
            placeholder="+40771504694"
          />
          <Flex justify={"center"}>
            <Button
              type="submit"
              variant="filled"
              size={"md"}
              color="green"
              my={"xl"}
            >
              <Text className="underline underline-offset-4 hover:underline-offset-8 transition-all">
                Descarca
              </Text>
            </Button>
          </Flex>
        </form>
      </Container>
    </>
  );
}

export default App;
