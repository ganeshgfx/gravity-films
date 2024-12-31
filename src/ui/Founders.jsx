import { Box, Card, Stack, Container, Typography, Divider } from "@mui/joy";

export default function Founders() {
     return (
          <Container>
               <Stack
                    gap={1}
                    sx={{
                         mb: 2,
                    }}
               >
                    {
                         [
                              {
                                   name: "Ravi Kumar",
                                   src: "/members/rv.jpg",
                                   role: "Founder & Director of Operations",
                              },
                              {
                                   name: "Sarthak Patel",
                                   src: "/members/sarthak.jpg",
                                   role: "Creative Director",
                              },
                              // {
                              //      name: "Sarthak Thakur",
                              //      src: "/members/sarthak_t.jpg",
                              //      role: "Director of Business Development",
                              // },
                              {
                                   name: "Ganesh Ghutiya",
                                   src: "/members/ganesh.jpg",
                                   role: "Technology Lead",
                              }
                         ].map(
                              ({ name, src, role }, index) => (
                                   <Card
                                        key={index}
                                        variant="soft"
                                        sx={{
                                             borderRadius: "xl",
                                        }}
                                   >
                                        <Stack
                                             gap={2}
                                             direction="row"
                                             alignContent="center"
                                             alignItems="center"
                                        >
                                             <span>
                                                  <Box sx={{
                                                       height: "64px",
                                                       width: "64px",
                                                       backgroundImage: `url(${src})`,
                                                       backgroundSize: "cover",
                                                       borderRadius: "lg",
                                                       transition: "all 0.5s",
                                                       filter: "saturate(0%)contrast(1.2) brightness(1.1)",
                                                       "&:hover": {
                                                            filter: "saturate(100%)contrast(1) brightness(1)",
                                                            height: "128px",
                                                            width: "128px",
                                                       },
                                                  }} />
                                             </span>
                                             <Box
                                             >
                                                  <Typography variant="h6" color="text.primary">
                                                       {name}
                                                  </Typography>
                                                  <Typography variant="body2" color="text.secondary">
                                                       {role}
                                                  </Typography>
                                             </Box>
                                             <Divider orientation="horizontal" sx={{ opacity: 0, flexGrow: 1 }} />
                                             <Box>

                                             </Box>
                                        </Stack>
                                   </Card>
                              )
                         )
                    }
               </Stack>
          </Container>
     )
}