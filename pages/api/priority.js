// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
   [
    { value: "Urgent",label: "Urgent",type: 1,},
    {
      value: "Regular",
      label: "Regular",
      type: 2,

    },
    {
      value: "Trival",
      label: "Trival",
      type: 3,
    }
   ]
  );
}
