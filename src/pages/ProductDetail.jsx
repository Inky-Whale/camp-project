import React from "react";
import {
  CardMeta,
  CardHeader,
  CardGroup,
  CardDescription,
  CardContent,
  Button,
  Card,
  Icon,
  Image,
} from "semantic-ui-react";

export default function ProductDetail() {
  return (
    <Card>
      <CardContent>
        <Image
          floated="right"
          size="mini"
          src="/images/avatar/large/jenny.jpg"
        />
        <CardHeader>{}</CardHeader>
        <CardMeta>New User</CardMeta>
        <CardDescription>
          Jenny requested permission to view your contact details
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Approve
          </Button>
          <Button basic color="red">
            Decline
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
