import {TechnichalSkill} from "@/data/technical-skills";
import Icon from "@/components/Icon";
import Card, {CardBody, CardHeader} from "@/components/Card";

export function SkillCard({skill}: { skill: TechnichalSkill }) {
    return (
        <>
            <Card>
                <CardHeader>
                    <div className="flex flex-row gap-2 items-center">
                        {skill.icon && <Icon name={skill.icon} size={32}/>}
                        <h6>{skill.area}</h6>
                    </div>
                </CardHeader>
                <CardBody>
                    <ul className="list-disc list-inside">
                        {skill.skills.map((skill: string, index: number) => <li key={index}>{skill}</li>)}
                    </ul>
                </CardBody>
            </Card>
        </>
    );
}