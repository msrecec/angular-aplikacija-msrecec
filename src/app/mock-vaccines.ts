import { Vaccine } from './vaccine';

export const VACCINES: Vaccine[] = [
  {manufacturerName: "Pfizer-BioNTech", requiredNumberOfShots: 2, approved: true},
  {manufacturerName: "Moderna", requiredNumberOfShots: 2, approved: true},
  {manufacturerName: "Johnson & Johnson", requiredNumberOfShots: 1, approved: true},
  {manufacturerName: "AstraZeneca", requiredNumberOfShots: 1, approved: true},
  {manufacturerName: "Gamaleya Research Institute", requiredNumberOfShots: 1, approved: false},
];
