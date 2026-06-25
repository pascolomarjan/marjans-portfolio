import {ParagraphData} from "@/data/about-me";
import Icon from "@/components/Icon";
import Card, {CardBody, CardHeader} from "@/components/Card";

export default function ParagraphComponent(
    {paragraph}: { paragraph: ParagraphData }
) {
    return (
        <>
            <Card>
                <CardHeader>
                    <div className="flex flex-row gap-2 items-center">
                        {paragraph.icon && <Icon name={paragraph.icon} size={32}/>}
                        <h6>{paragraph.title}</h6>
                    </div>
                </CardHeader>
                <CardBody>
                    <br/>
                    <div>
                        <p className="text-justify max-w-prose ">{paragraph.content}</p>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}