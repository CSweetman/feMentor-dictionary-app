import Category from "./components/Category";

export default function App() {
  return (
    <div>
      
    <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
      <Category
        name={'noun'}
        definitions={["Used as a greeting or to begin a phone conversation."]}
        synonyms={["electronic keyboard", "greetings"]}
        antonyms={["goodbye", "sayonara"]}
        example={undefined}
        fontName="sans"
      />
      <Category
        name={'noun'}
        definitions={["Replacement for Hiyapapaya and Zappy!"]}
        synonyms={["electronic keyboard", "greetings"]}
        antonyms={undefined}
        example={"Zoo wee mama"}
        fontName="serif"
      />
    </div>
  )
}