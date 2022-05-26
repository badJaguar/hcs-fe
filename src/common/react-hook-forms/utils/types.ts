import { Path } from "react-hook-form";

export type FieldValues = Record<string, unknown> & { name: Path<Record<string, unknown>>; };
