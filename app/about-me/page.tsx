import PageTitle from "@/components/PageTitle";
import ParagraphComponent from "@/components/ParagraphComponent";
import {aboutMeParagraphs, ParagraphData} from "@/data/about-me";
import circuit from "@/assets/images/circuit3.png"
import PageContentWrapper from "@/components/PageContentWrapper";

export default function AboutMe() {
    return (
        <>
            <PageTitle title="About Me" backgroundPic={circuit}/>
            <PageContentWrapper>
                <div className="flex flex-wrap justify-start">
                    {
                        aboutMeParagraphs.map(
                            (paragraph: ParagraphData, index: number) => {
                                return <div key={index} className="flex flex-col w-full lg:w-1/2 lg:px-4">
                                    <ParagraphComponent paragraph={paragraph}/>
                                </div>
                            }
                        )
                    }
                </div>
            </PageContentWrapper>


        </>
    )
}