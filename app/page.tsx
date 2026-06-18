import PageTitle from "@/components/PageTitle";
import ConsoleComponent from "@/components/ConsoleComponent";
import {introduction} from "@/data/simple-description";
import cicruitImage from "@/assets/images/circuit4.png"
import PageContentWrapper from "@/components/PageContentWrapper";
import GoToButton from "@/components/GoToButton";

export default function Home() {
    return (
        <>
            <PageTitle title="Hello, I'm Marjan" backgroundPic={cicruitImage}/>
            <PageContentWrapper>
                <ConsoleComponent data={introduction}/>
                    <div className="flex justify-center w-full py-6">
                        <GoToButton link="about-me" text="See More"
                                    className="border border-main rounded-full
                              bg-background text-main
                              hover:bg-main hover:text-background
                              py-2 px-4"/>
                    </div>
            </PageContentWrapper>
        </>
    );
}
