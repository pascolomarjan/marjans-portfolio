import PageTitle from "@/components/PageTitle";
import {SkillCard} from "@/components/SkillCard";
import {TechnichalSkill, techSkills} from "@/data/technical-skills";
import circuit from "@/assets/images/circuit1.png"
import PageContentWrapper from "@/components/PageContentWrapper";

export default function TechnicalSkills() {
    return (
        <>
            <PageTitle title="Technical Skills" backgroundPic={circuit}/>
            <PageContentWrapper>
                <div className="flex flex-wrap justify-start items-stretch">
                    {
                        techSkills.map((skill: TechnichalSkill) => {
                            return (
                                <div key={skill.area} className="flex flex-col w-full lg:w-1/2 lg:px-4">
                                    <SkillCard skill={skill}/>
                                </div>
                            )
                        })
                    }
                </div>
            </PageContentWrapper>

        </>
    )
}