
import React, { useEffect, useState } from "react";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { db } from "../../Login/FirebaseAuth";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";

const VisiteurListe = () => {
  const [visitor, setVisitor] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "visitor"), where("isConfirmedService", "==", true));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const visitorList = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const user = {
          id: doc.id,
          ...data,
        };
        visitorList.push(user);
      });
      setVisitor(visitorList);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="px-2">
      <Container>
        <Grid container spacing={3}>
          {visitor.map((user) => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  marginTop: "5%",
                  marginBottom: "5%",
                  backgroundColor: "#F6F1E9",
                  borderRadius: "15px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                  padding: "20px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                  }}
                >
                  <strong>Nom :</strong> {user.name}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "15px",
                    fontWeight: "400",
                    color: "#2150FC",
                  }}
                >
                  <strong>Date d'inscription :</strong>{" "}
                  {user.createdAt?.seconds ? new Date(user.createdAt.seconds * 1000).toLocaleDateString() : ''}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    fontFamily: "PT Serif",
                    width: "100%",
                    wordWrap: "break-word",
                    textAlign: "center",
                  }}
                >
                  <strong>Email :</strong> {user.email}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    fontFamily: "PT Serif",
                    width: "100%",
                    wordWrap: "break-word",
                    textAlign: "center",
                  }}
                >
                  <strong>Véhicule :</strong> {user.matricule}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default VisiteurListe;
