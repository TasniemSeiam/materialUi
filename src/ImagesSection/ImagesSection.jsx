import {
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import styled from "./style.module.css";
const ImagesSection = () => {
  return (
    <Container>
      <Typography variant="h6">SHOP BY CATEGORY</Typography>
      <ImageList sx={{ width:1160,height:1000 }} cols={4} rowHeight={284}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} className={styled.images}>
            <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} sx={{textTransform:"capitalize"}} position="below" />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

const itemData = [
  {
    img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Ffeatured-category%2F1fef41ce-1919-498e-9956-06ead3c01c74.png&w=2160&q=75",
    title: "accent chair",
  },
  {
    img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Ffeatured-category%2F38e9c17f-d789-4196-89d6-d7403c92a148.png&w=2160&q=75",
    title: "accent stools",
  },
  {
    img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Ffeatured-category%2Fb8eeea1e-5646-4a50-8254-09e1f0015e72.png&w=2160&q=75",
    title: "accent tables",
  },
  {
    img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Ffeatured-category%2F8e440138-e688-4e0e-8007-c26d9899e839.png&w=1024&q=75",
    title: "accessories",
  },
  {
    img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Ffeatured-category%2F0e127cf1-e932-4138-bf17-2949793f63c8.png&w=2160&q=75",
    title: "bar & counters tools",
  },
  {
    img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Ffeatured-category%2F2ab21551-176a-4e59-98ab-8bc737dcf6a7.png&w=1024&q=75",
    title: "dining",
  },
  {
    img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Ffeatured-category%2F6e6cf6d2-5d45-45f9-9f45-a5c8c450721e.png&w=2160&q=75",
    title: "lighting",
  },
  {
    img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Ffeatured-category%2F6a9e69cb-58ba-4c96-9585-0f7998a241c1.png&w=2160&q=75",
    title: "media & storage",
  },
  {
    img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Ffeatured-category%2F57123820-604a-4dab-ad65-ec693e378c85.png&w=2160&q=75",
    title: "outdoor",
  },
  {
    img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Ffeatured-category%2F7d688882-d1ea-4681-b501-f559c267121d.png&w=1024&q=75",
    title: "Ready to ship upholstery",
  },
  {
    img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Ffeatured-category%2F9bb49ba9-f707-44d3-904c-e3da88219ec2.png&w=1024&q=75",
    title: "rugs",
  },
  {
    img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Ffeatured-category%2Ffd37b43b-990a-433b-874e-c1998333a4da.png&w=2160&q=75",
    title: "storage bed",
  },
];

export default ImagesSection;
