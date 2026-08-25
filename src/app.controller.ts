import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

export interface PostCreatedEvent {
  id: string;
  userId: string;
  content: string;
  createdAt: string;
}

@Controller()
export class AppController {
  private totalPosts = 0;

  @EventPattern('post.created')
  handlePostCreated(@Payload() post: PostCreatedEvent) {
    this.totalPosts++;

    console.log('Analytics received post.created');
    console.log(`Post ID: ${post.id}`);
    console.log(`Total posts: ${this.totalPosts}`);
  }
}
