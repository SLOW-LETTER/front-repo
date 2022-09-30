import { Dispatch, SetStateAction } from "react";

export interface LetterTemplate {
  createdAt: string;
  deleted: boolean;
  fileUrl: string;
  id: number;
  updatedAt: string;
}

export interface TemplateProps {
  templatesArr: {templateUrl: string, templateId: number}[];
}

export interface CarouselItemProps {
  imgUrl: string;
}

export interface AdditionalFormLabelProps {
  name: string
}

export interface AdditionalItemProps {
  label: string,
  text: string,
  colS?: string,
  colE?: string,
  rowS?: string,
  rowE?: string
}

export interface TicketBodyItemProps {
  label: string,
  text: string,
  colS?: string,
  colE?: string,
  rowS?: string,
  rowE?: string
}

export interface AdditionalFormSelectProps {
  id?: string,
  placeHolder?: string,
  onSetState: Dispatch<SetStateAction<string>>,
  options?: string[]
}