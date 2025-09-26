import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslations } from "@/i18n/utils";

const youtubeIds = [
  "OQ4tOQyUIdM",
  "-fKscx1aza8",
  "s_zf_DgZyQE",
  "Yz-S_87K7ds",
  "rRByXUbO4N8",
];

export default function FilmsSection({ lang }: { lang: "de" | "en" }) {
  const t = useTranslations(lang);

  return (
    <div className="space-y-6 pt-24">
      <h3 className="subtitle">{t("home.films.title")}</h3>
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {youtubeIds.map((id) => (
            <CarouselItem key={id} className="basis-5/6">
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video"
                allow="picture-in-picture"
                className="aspect-video w-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 size-10" />
        <CarouselNext className="right-2 size-10" />
      </Carousel>
    </div>
  );
}
