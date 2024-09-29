import { TagsInput } from "@mantine/core";
import { fields } from "../Data/PostJob";
import SelectInput from "./SelectInput";

const PostJob = () => {
    const select = fields;
    return <div className="w-4/5 mx-auto">
        <div className="text-2xl font-semibold mb-5">İş İlanı Oluştur</div>
        <div className="flex flex-col gap-5">
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput {...select[0]} />
                <SelectInput {...select[1]} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput {...select[2]} />
                <SelectInput {...select[3]} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput {...select[4]} />
                <SelectInput {...select[5]} />
            </div>
            <TagsInput label="Yetenekler" placeholder="Yetenek Girin" splitChars={[',','','|']} clearable acceptValueOnBlur />
        </div>
    </div>
}

export default PostJob;