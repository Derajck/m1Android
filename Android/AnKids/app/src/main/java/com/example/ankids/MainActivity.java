package com.example.ankids;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.view.WindowManager;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.ImageView;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    private static  int SPLASH_SCREEN = 5000;

    // Global variables
    Animation topAnim, bottomAnim;
    ImageView imgBanner;
    ImageView imgPeople;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
        setContentView(R.layout.activity_main);

        triggerAnimation();
    }

    protected void triggerAnimation() {
        // animations
        topAnim = AnimationUtils.loadAnimation(this, R.anim.splash_screen_top_animation);
        bottomAnim = AnimationUtils.loadAnimation(this, R.anim.splash_screen_bottom_animation);

        // hooks
        imgPeople = findViewById(R.id.logo_people);
        imgBanner = findViewById(R.id.logo_banner);

        imgPeople.setAnimation(topAnim);
        imgBanner.setAnimation(bottomAnim);

        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                Intent intent = new Intent(MainActivity.this, Login.class);
                startActivity(intent);
                finish();
            }
        }, SPLASH_SCREEN);
    }
}