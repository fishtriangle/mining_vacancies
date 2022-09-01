import { parse } from "./cssParseSync";

const handleVacanciesFile = (file, enterpriseId, updateMethod) => {
  const reader = new FileReader();
  reader.onabort = () => console.log("file reading was aborted");
  reader.onerror = () => console.error("file reading has failed");
  reader.onload = () => {
    const str = reader.result;
    const records = parse(str, {
      columns: ["vacancy", "requirements", "docs"],
      from_line: 2,
    });
    const enterpriseVacancies = { id: enterpriseId, vacancies: records };
    updateMethod({
      variables: { input: enterpriseVacancies },
    })
      .then(({ data }) => {
        alert(data.updateEnterprise.content);
      })
      .catch((e) => console.error(e));
  };
  reader.readAsText(file);
};

export default handleVacanciesFile;
