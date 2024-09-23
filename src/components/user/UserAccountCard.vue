<template>
  <div class="profile-container">
    <div class="profile-header">
      <img :src="user.avatar" alt="User Avatar" class="profile-avatar" />
      <h1 class="profile-name">{{ user.name }}</h1>
      <p class="profile-email">{{ user.email }}</p>
    </div>

    <div class="profile-details">
      <div class="profile-card">
        <h2>Orders</h2>
        <p>{{ user.orders }}</p>
      </div>
      <div class="profile-card">
        <h2>Mobile Phone</h2>
        <p>{{ user.mobile }}</p>
      </div>
      <div class="profile-card">
        <h2>Addresses</h2>
        <p>{{ user.address }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import userAvatar from '@/assets/images/user.jpeg'

export default {
  data() {
    return {
      user: {
        name: "Ευδοκία Βιτάλη",
        email: "evdo_vita@example.com",
        avatar: userAvatar,
        orders: 12,
        mobile: "+30 694 66789",
        address: "Agoniston Politechniou, Corfu, Greece, 491 00",
      },
    };
  },
};
</script>

<style scoped>
.profile-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #fff;
}

.profile-header {
  text-align: center;
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
}

.profile-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 15px;
}

.profile-name {
  font-size: 24px;
  margin: 10px 0;
}

.profile-email {
  font-size: 16px;
  color: #555;
}

.profile-details {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 0;
}

.profile-card {
  flex: 1;
  min-width: 250px;
  border: 1px solid #f0f0f0;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.profile-card h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.profile-card p {
  font-size: 18px;
  color: #333;
}

@media screen and (max-width: 768px) {
  .profile-details {
    flex-direction: column;
  }

  .profile-avatar {
    width: 120px;
    height: 120px;
  }

  .profile-name {
    font-size: 22px;
  }

  .profile-email {
    font-size: 14px;
  }
}

@media screen and (max-width: 480px) {
  .profile-container {
    padding: 15px;
  }

  .profile-avatar {
    width: 100px;
    height: 100px;
  }

  .profile-name {
    font-size: 20px;
  }

  .profile-email {
    font-size: 12px;
  }
}
</style>
