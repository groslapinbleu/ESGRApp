import { ArticleInterface } from '../models/Article';

// eslint-disable-next-line
import { data, testData } from '../data/data';

export const getArticles = (): ArticleInterface[] => {
  const responses: ArticleInterface[] = [];
  data.forEach((value) => {
    const resp = {
      id: value.id,
      image_url: value.image_url,
      title: value.title,
      content: value.text,
      grade: value.grade,
      quality: value.quality + 0.5 * Math.random(), // adding random number to force a different suite of articles at each reload
      choice: 0,
    };
    responses.push(resp);
  });
  return responses;
};
