import "./Card.css";
import Card from "./Card";
import { CardComponent, CardProps } from "@yext/search-ui-react";
import { fireClick } from "../common/Analytics";
import { useSearchState } from "@yext/search-headless-react";

interface StandardItem {
    name?: string;
    description?: string;
    logo?: {
      image?: {
        url?: string;
      }
    }
}

const StandardCard: CardComponent<StandardItem> = ({
  result,
}: CardProps<StandardItem>) => {
  const entity = result.rawData;
  const shortenedDescription = entity.description ? entity.description.substring(0, 200) : null;
  const verticalKey = useSearchState((state) => state.vertical.verticalKey);
  const queryId = useSearchState((state) => state.query.queryId) || "";

  return (
    <Card>
      <div className="flex flex-row">
        {entity.logo?.image?.url && (
          <div className="p-4 mr-8">
            <img className="w-20 h-20" src={entity.logo.image.url}/>
          </div>
        )}
        <div className="flex flex-col">
          {entity.name && (
            <div className="text-xl font-secondary pb-1 text-green-900">
              {entity.name}
            </div>
          )}
          {shortenedDescription && (
            <div className="pt-2">
              {shortenedDescription}...
            </div>
          )}
          <a 
            className="pt-2 underline hover:no-underline"
            target="_blank" 
            href="https://health.clevelandclinic.org/are-video-games-good-for-you"
            onClick={() =>
              fireClick(entity.name || "", "analytics fire", queryId, verticalKey ?? "")
            } rel="noreferrer"
          >
            Link that Fires YA
          </a>
        </div>
      </div>
    </Card>
  );
};

export default StandardCard;