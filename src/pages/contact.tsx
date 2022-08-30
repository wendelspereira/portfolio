import type { NextPage } from "next";
import { ArrowSquareOut, CaretDown, Envelope, Phone, X } from "phosphor-react";
import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";
import { useState } from "react";
import {codeMirrorTheme} from "../config/codeMirrorTheme"

const Contact: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSent(true);
  };

  const handleMirror = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
    }
  };

  const today = new Date();

  const dow = ["Sun", "Mon", "Tur", "Wed", "Thu", "Fri", "Sat"];

  const month = [
    "jan",
    "feb",
    "mar",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Nov",
    "Dec",
  ];

  const formatedToday =
    dow[today.getDay()] + " " + today.getDate() + " " + month[today.getMonth()];
  console.log(formatedToday);

  return (
    <div className="flex w-full h-[calc(100vh-6rem)]">
      <div className="flex flex-col border-r border-brand-600 w-[19rem] h-full">
        <div className="flex items-center h-10 w-full border-b border-brand-600 text-white-100 gap-3 px-3">
          <span>
            <CaretDown className="inline" size={16} />
          </span>
          contacts
        </div>
        <div className={"px-5 py-4"}>
          <ul className="flex flex-col gap-2 text-text-main hover:text-white">
            <a  rel="noopener noreferrer" target="_blank" href="mailto:wendelspereira@outlook.com">
              <li className="flex items-center gap-2 hover:text-white-100">
                <Envelope size={16} color="#607b96" weight="fill" />
                <span>@wendelspereira</span>
              </li>
            </a>
            <a  rel="noopener noreferrer" target="_blank" href="https://api.whatsapp.com/send/?phone=5587996592930&text&type=phone_number&app_absent=0">
              <li className="flex items-center gap-2 hover:text-white-100">
                <Phone size={16} color="#607b96" weight="fill" />
                <span>(87)99659-2930</span>
              </li>
            </a>
          </ul>
        </div>

        <div className="flex items-center h-10 w-full border-y border-brand-600 text-white-100 gap-3 px-3">
          <span>
            <CaretDown className="inline" size={16} />
          </span>
          find-me-also-in
        </div>
        <div className={"px-5 py-4"}>
          <ul className="flex flex-col gap-2 text-text-main">
            <a  rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UCNldlHLt5OU1vTIu1yWZyhw">
              <li className="flex items-center gap-2 hover:text-white-100">
                <span>
                  <ArrowSquareOut size={16} color="#607b96" weight="fill" />
                </span>
                YouTube channel
              </li>
            </a>
            <a  rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/wendelspereira">
              <li className="flex items-center gap-2 hover:text-white-100">
                <span>
                  <ArrowSquareOut size={16} color="#607b96" weight="fill" />
                </span>
                Instagram accout
              </li>
            </a>
            <a  rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/devwendelspereira">
              <li className="flex items-center gap-2 hover:text-white-100">
                <span>
                  <ArrowSquareOut size={16} color="#607b96" weight="fill" />
                </span>
                Linkedin
              </li>
            </a>
            <a  rel="noopener noreferrer" target="_blank" href="https://www.github.com/wendelspereira">
              <li className="flex items-center gap-2 hover:text-white-100">
                <span>
                  <ArrowSquareOut size={16} color="#607b96" weight="fill" />
                </span>
                GitHub
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div className={"flex-1"}>
        <div className="flex items-center border-b text-brand-600 border-brand-600 h-10 gap-12">
          <div className="flex px-3 items-center border-r border-brand-600 h-full gap-12 text-white">
            contact
            <div className="items-center justify-center p-1 hover:rounded-md hover:text-white-100 hover:bg-brand-500 hover:transition">

            <X weight="bold" size={12} />
            </div>
          </div>
        </div>

        <main className="flex w-full h-[calc(100%-3rem)] overflow-y-auto gap-8">
          <section className="flex flex-1 items-center justify-center border-r border-brand-600">
            {!sent ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col text-brand-600 w-full xl:max-w-[23rem] gap-6"
              >
                <label htmlFor="name">
                  _name
                  <input
                    name="name"
                    onChange={handleMirror}
                    autoComplete="off"
                    type="text"
                    id="name"
                  />
                </label>

                <label htmlFor="email">
                  _email
                  <input
                    name="email"
                    onChange={handleMirror}
                    autoComplete="off"
                    type="email"
                    id="email"
                  />
                </label>

                <label htmlFor="message">
                  _message
                  <input
                    name="message"
                    onChange={handleMirror}
                    autoComplete="off"
                    type="textarea"
                    id="message"
                    className="h-36 flex items-start "
                  />
                </label>

                <button
                  type="submit"
                  className="flex bg-brand-500 h-9 w-36 items-center justify-center text-white-100 text-sm rounded-lg"
                >
                  submit-message
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center gap-3">
                <h1 className="text-white-100 xl:text-3xl">Thank you!</h1>
                <p className="xl:max-w-[24rem] xl:text-lg text-text-main mb-6">
                  Your message has been accepted. You will recieve answer really
                  soon!
                </p>
                <button className="flex items-center justify-center xl:text-sm xl:py-3 xl:px-4 bg-brand-500 xl:h-10 xl:w-44 text-white-100 rounded-lg">
                  send-new-message
                </button>
              </div>
            )}
          </section>
          <section className="flex h-[calc(100%-3rem)] flex-1 xl:pt-32 justify-center">
            <CodeMirror
              value={`const button = document.querySelector('#submit');\nconst message = {\n   name: "${name}",\n   email: "${email}",\n   message: "${message}",\n   date: "${formatedToday}"\n} \n\nbutton.addEventListener('click', () => {\n   form.send(message);\n}`}
              height="100%"
              editable={false}
              theme={codeMirrorTheme}
              extensions={[javascript({ jsx: true })]}
              width="100%"
              maxWidth="100%"
              style={{
                fontSize: "1.125rem",
              }}
            />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Contact;
