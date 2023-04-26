import React from "react";

import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { IArticleData } from "./articlesData";

export default function ArticleCard({ data }: any) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="xs"
      withBorder
      className="h-full w-full "
    >
      <Card.Section component="a" href="#article" className="bg-gray-200">
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={150}
          alt="article image"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text className="w-fit">{data?.title}</Text>
      </Group>

      <Text size="sm" color="dimmed">
        {data?.content}
      </Text>

      <div className="bg-black text-white rounded-2xl px-[30px] py-2 w-fit text-xs my-2">
        {data?.date}
      </div>
    </Card>
  );
}
