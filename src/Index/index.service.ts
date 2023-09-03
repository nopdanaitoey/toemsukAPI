
import path from "path";

export const getImages = async (imageName: string) => {
  console.log(process.cwd());
  const imagePath = path.join(process.cwd(), "public/images", imageName);
  return imagePath;
};
