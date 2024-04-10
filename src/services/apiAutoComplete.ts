import { AUTOCOMPLETE_URL } from '../data/constants';
import { z } from 'zod';

const autoCompleteItemSchema = z.object({
    AdministrativeArea: z.object({
        ID: z.string(),
        LocalizedName: z.string(),
    }),
    Country: z.object({
        ID: z.string(),
        LocalizedName: z.string(),
    }),
    Key: z.string(),
    LocalizedName: z.string(),
    Rank: z.number(),
    Type: z.string(),
    Version: z.number(),
});
const autoCompleteSchemaArr = z.array(autoCompleteItemSchema);
export type TAutoCompleteItem = z.infer<typeof autoCompleteItemSchema>;

export async function getAutoComplete(text: string) {
    const resp = await fetch(`${AUTOCOMPLETE_URL}&q=${text}`);

    if (!resp.ok) throw new Error('Error: Cannot get autocomplete');

    const data = await resp.json();

    return autoCompleteSchemaArr.parse(data);
}
