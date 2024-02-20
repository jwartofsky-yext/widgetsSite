import { StandardCard } from "@yext/search-ui-react";
import { verticalConfig } from "../../searchApp";
import { Key } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function StandardSection<T>(props: any): JSX.Element | null {
  const {
    results,
    verticalKey,
    CardComponent = StandardCard,
  } = props;

  if (results.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="Heading Heading--head text-center text-black py-2.5">
        {verticalConfig[verticalKey].label ?? verticalKey}
      </h2>
      <div>
        {results.map((result: any, index: Key | null | undefined) => (
          <CardComponent result={result} key={index} />
        ))}
      </div>
    </section>
  );
}

export default StandardSection;