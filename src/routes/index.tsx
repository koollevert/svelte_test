// import { component$ } from "@builder.io/qwik";
// import type { DocumentHead } from "@builder.io/qwik-city";

// export default component$(() => {
//   return (
//     <>
//       <h1>Hi 👋</h1>
//       <div>
//         Can't wait to see what you build with qwik!
//         <br />
//         Happy coding.
//       </div>
//     </>
//   );
// });

// export const head: DocumentHead = {
//   title: "Welcome to Qwik",
//   meta: [
//     {
//       name: "description",
//       content: "Qwik site description",
//     },
//   ],
// };
import { component$ } from '@builder.io/qwik';
import { UserComponent } from '../components/user';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/avatar';


export default component$(() => {
  return (
    <div>
      <h1>Welcome to Qwik</h1>
      <UserComponent />
      <Avatar>
        <AvatarImage src="https://via.placeholder.com/40" alt="User Avatar" />
        <AvatarFallback fallback="JD" />
      </Avatar>

      <Avatar className="bg-gray-200">
        <AvatarFallback fallback="AB" />
      </Avatar>
    </div>
  );
});

// export default component$(() => {
//   return (
//     <div class="flex space-x-4">
//     </div>
//   );
// });
